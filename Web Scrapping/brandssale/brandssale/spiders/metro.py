import scrapy
from scrapy.utils.response import open_in_browser
from scrapy.http import FormRequest
from ..items import BrandssaleItem
from datetime import date
import io



class MetroSpider(scrapy.Spider):

    name = 'metro'
    page_number1= 2
    page_number2=2
    page_number3=2

    start_urls = [
       'https://www.metroshoes.com.pk/collections/sandals-sale' ,
    # 'file:///E:/Semester%207/pages%20html/metro.html'    
    'https://www.metroshoes.com.pk/collections/heels-sale' 
     ]

    def isWordPresent(sentence, word):
    
        s = sentence.split(" ")
 
        for i in s:
            if (i == word):
                return True
        return False

    def parse(self, response):


        # html=response.text
        # with io.open("metro.txt", "w", encoding="utf-8") as f:
        #     f.write(html)
    
        items=BrandssaleItem()

        today= date.today()
        datee = today.strftime("%Y-%m-%d")

        all_div_quotes=response.css('.mobile-half')
        
        for quotes in all_div_quotes:
            
            title=quotes.css(' .product-info-inner .prod-title::text').get().replace('\r\n','').strip()
            if title is None or title is '':
                continue
            
            title=title.lower()

            

            
        #     gender_category=quotes.xpath('//h1/text()').get()
        #    # gender_category=quotes.css('h1::text').get().replace('\r\n','').strip()
        #     gender_category=gender_category.lower()

          
            sale_price=quotes.css('.price .onsale .money::text').get()
            # sale_price=quotes.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "onsale", " " ))]//*[contains(concat( " ", @class, " " ), concat( " ", "money", " " ))]').get()

            price=quotes.css('.was .money::text').get()
            if sale_price is None:
                continue
            if sale_price is not None:
                sale_price=sale_price.replace('\r\n','').strip()
                sale_price=int(float(sale_price[3:].replace(',', '')))
                
            if price is not None:
                price=price.replace('\r\n','').strip()
                price=int(float(price[3:].replace(',', '')))
                


            product_link=quotes.css('div .product-info-inner a::attr(href)').get() 
            product_link='https://www.metroshoes.com.pk'+product_link  
             
                         
       
            
            
            image_link=quotes.css('div  img ::attr(src)').get()

            image_link2=quotes.css('div img::attr(src)').get()
            if image_link2==None:
                image_link2=image_link
            
            items['brand_name'] ='Metro'
            items['title']=title
            items['category_name'] ='shoes'

            items['gender_category'] ='female'
            items['price']=price
            items['sale_price']=sale_price
            items['product_link']=product_link
            items['image_link']=image_link
            items['image_link2']=image_link2
            items['date']=datee
            items['rating']='Good'
            items['status']='avb'

            items['brand_id']=6
            items['category_id']=3
            items['gender_id']=1
            items['overview']=items['brand_name']+' '+items['gender_category']+' '+items['category_name']+' '+items['title']+' '+items['gender_category']

            yield items

        
        # if gender_category=='male':
            
        #     next_page='https://www.bata.com.pk/collections/men-deals?page='+ str(MetroSpider.page_number1)

        #     if MetroSpider.page_number1 <3:
        #         MetroSpider.page_number1 +=1
        #         yield response.follow(next_page,callback=self.parse)

        # if gender_category=='female':
            
        #     next_page='https://www.bata.com.pk/collections/women-deals?page='+ str(MetroSpider.page_number2)

        #     if MetroSpider.page_number2 <3:
        #         MetroSpider.page_number2 +=1
        #         yield response.follow(next_page,callback=self.parse)

        # if gender_category=='kid':
            
        #     next_page='https://www.bata.com.pk/collections/kids-deals?page='+ str(MetroSpider.page_number3)

        #     if MetroSpider.page_number3 <2:
        #         MetroSpider.page_number3 +=1
        #         yield response.follow(next_page,callback=self.parse)
        


