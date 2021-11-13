import scrapy
from scrapy.utils.response import open_in_browser
from scrapy.http import FormRequest
from ..items import BrandssaleItem
from datetime import date
import io



class StyloSpider(scrapy.Spider):

    name = 'stylo'
    page_number1= 2
    page_number2=2
    page_number3=2

# one url one by one
    start_urls = [
         'https://stylo.pk/collections/sale/boys',
        # 'https://stylo.pk/collections/sale/babies',
        # 'https://stylo.pk/collections/sale/girls'

     ]

    def isWordPresent(sentence, word):
    
        s = sentence.split(" ")
 
        for i in s:
            if (i == word):
                return True
        return False

    def parse(self, response):


        # html=response.text
        # with io.open("stylo.txt", "w", encoding="utf-8") as f:
        #     f.write(html)
    
        items=BrandssaleItem()

        today= date.today()
        datee = today.strftime("%Y-%m-%d")

        all_div_quotes=response.css('.large-up--one-third')
       
        
        for quotes in all_div_quotes:
            
            title=quotes.css('.grid-view-item__title::text').get().replace('\r\n','').strip()
            title=title.lower()

            

            
        #     gender_category=quotes.xpath('//h1/text()').get()
            # gender_category=quotes.css('.page-width::text').get().replace('\r\n','').strip()
            # print('************************************')
            # print(gender_category)
            gender_category='male'

          
            sale_price=quotes.css('.product-price__sale::text').get()
            # sale_price=quotes.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "onsale", " " ))]//*[contains(concat( " ", @class, " " ), concat( " ", "money", " " ))]').get()

            price=quotes.css('.regular::text').get()
            
            if sale_price is not None:
                sale_price=sale_price.replace('\r\n','').strip()
                sale_price=int(float(sale_price[3:].replace(',', '')))
                
            if price is not None:
                price=price.replace('\r\n','').strip()
                price=int(float(price[3:].replace(',', '')))
                


            product_link=quotes.css('.grid-view-item__link::attr(href)').get() 
            product_link='https://stylo.pk'+product_link  
             
            image_link=quotes.css('.primary::attr(src)').get().replace('100','300')

            image_link2=quotes.css('.hover img::attr(srcset)').get()
            if image_link2==None:
                image_link2=image_link
            
            items['brand_name'] ='Stylo'
            items['title']=title
            items['category_name'] ='shoes'

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
            items['category_id']=3
            items['gender_id']=1
            items['overview']=items['brand_name']+' '+items['gender_category']+' '+items['category_name']+' '+items['title']+' '+items['gender_category']

            yield items

        
        if gender_category=='male':
            
            next_page='https://stylo.pk/collections/sale/boys?page='+ str(StyloSpider.page_number1)

            if StyloSpider.page_number1 <3:
                StyloSpider.page_number1 +=1
                yield response.follow(next_page,callback=self.parse)

        if gender_category=='female':
            
            next_page='https://stylo.pk/collections/sale/girls?page='+ str(StyloSpider.page_number2)

            if StyloSpider.page_number2 <3:
                StyloSpider.page_number2 +=1
                yield response.follow(next_page,callback=self.parse)

        if gender_category=='kid':
            
            next_page='https://stylo.pk/collections/sale/babies?page='+ str(StyloSpider.page_number3)

            if StyloSpider.page_number3 <3:
                StyloSpider.page_number3 +=1
                yield response.follow(next_page,callback=self.parse)
        


