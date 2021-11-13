import scrapy
from scrapy.utils.response import open_in_browser
from scrapy.http import FormRequest
from ..items import BrandssaleItem
from datetime import date
import io



class NdureSpider(scrapy.Spider):

    name = 'ndure'
    page_number1= 2
    page_number2=2
    page_number3=2

   # allowed_domains = ['https://www.ndure.com/collections/sale?constraint=boy']
    start_urls = [
# 'https://www.ndure.com/collections/sale?constraint=boy'  ,
'https://www.ndure.com/collections/sale?constraint=girl'

     ]    

#
    def isWordPresent(sentence, word):
    
        s = sentence.split(" ")
 
        for i in s:
            if (i == word):
                return True
        return False

    def parse(self, response):

        # html=response.text
        # with io.open("ndure.txt", "w", encoding="utf-8") as f:
        #     f.write(html)
    

            
        items=BrandssaleItem()

        today= date.today()
        datee = today.strftime("%Y-%m-%d")

        all_div_quotes=response.css('.inner-top')
        
        for quotes in all_div_quotes:

            
            title=quotes.css('div .product-bottom span::text').get().replace('\r\n','').strip()
            print(title)

            # title=quotes.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "product-title", " " ))]/text()').get()
            # title=title.lower()

            
            # gender_category=quotes.css('span .bd-title span .arrow::text').get()
            gender_category='girl'
            # gender_category=quotes.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "product-title", " " ))]/text()').get()
           # gender_category=quotes.css('h1::text').get().replace('\r\n','').strip()
            gender_category=gender_category.lower().replace('(','').replace(')','')
            print('*******************************************************************************************')
            print(gender_category)
            #if 'men' in gender_category:
            if (NdureSpider.isWordPresent(gender_category, 'boy')):
                gender_category='male'
                category_name='shoes' 
                category_id=11
                gender_id=2

            elif (NdureSpider.isWordPresent(gender_category, 'girl')):
                gender_category='female'
                category_name='shoes' 
                category_id=11
                gender_id=1

        
            sale_price=quotes.css('.special-price::text').get()
            # sale_price=quotes.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "onsale", " " ))]//*[contains(concat( " ", @class, " " ), concat( " ", "money", " " ))]').get()

            price=quotes.css('.old-price::text').get()

            if sale_price is not None:
                sale_price=sale_price.replace('\r\n','').strip()
                sale_price=int(float(sale_price[3:].replace(',', '')))
                
            if price is not None:
                price=price.replace('\r\n','').strip()
                price=int(float(price[3:].replace(',', '')))
                


            product_link=quotes.css('div .product-image a::attr(href)').get() 
            product_link='https://www.ndure.com'+product_link  
             
                         
       
            
            
            image_link=quotes.css('img ::attr(data-srcief)').get()
            

            image_link2=quotes.css('span .srcset img ::attr(data-srcset)').get()
            if image_link2==None:
                image_link2=image_link
            
            items['brand_name'] ='Ndure'
            items['title']=title
            items['category_name'] =category_name

            items['gender_category'] =gender_category
            items['price']=price
            items['sale_price']=sale_price
            items['product_link']=product_link
            items['image_link']=image_link
            items['image_link2']=image_link2
            items['date']=datee
            items['rating']='Good'
            items['status']='avb'

            items['brand_id']=6
            items['category_id']=category_id
            items['gender_id']=gender_id
            items['overview']=items['brand_name']+' '+items['gender_category']+' '+items['category_name']+' '+items['title']+' '+items['gender_category']

            yield items

        
        if gender_category=='male':
            
            next_page='https://www.ndure.com/collections/sale/boy?page='+ str(NdureSpider.page_number1)

            if NdureSpider.page_number1 <3:
                NdureSpider.page_number1 +=1
                yield response.follow(next_page,callback=self.parse)

#         if gender_category=='female':
            
#             next_page='https://www.ndure.com/collections/sale/girl?page='+ str(NdureSpider.page_number2)

#             if NdureSpider.page_number2 <3:
#                 NdureSpider.page_number2 +=1
#                 yield response.follow(next_page,callback=self.parse)

#         if gender_category=='kid':
            
#             next_page='https://www.bata.com.pk/collections/kids-deals?page='+ str(NdureSpider.page_number3)

#             if NdureSpider.page_number3 <2:
#                 NdureSpider.page_number3 +=1
#                 yield response.follow(next_page,callback=self.parse)
        


