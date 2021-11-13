import scrapy
from scrapy.utils.response import open_in_browser
from scrapy.http import FormRequest
from ..items import BrandssaleItem
from datetime import date
import io
import re

class BonanzaSpider(scrapy.Spider):
    name = 'bonanza'

    page_number= 2
    page_number2= 2
    page_number3= 2
    page_number4= 2
    page_number5= 2
    page_number6= 2


    category_name=''

    # allowed_domains = ['https://pk.khaadi.com/sale.html']
    start_urls = [
            'https://bonanzasatrangi.com/collections/unstitched-sale',
            # 'file:///E:/Semester%207/pages%20html/bonanza.html'
            'https://bonanzasatrangi.com/collections/ready-to-wear-sale',
            'https://bonanzasatrangi.com/collections/beauty-sale',
            'https://bonanzasatrangi.com/collections/beauty-fragrances-sale',

            'https://bonanzasatrangi.com/collections/sale-men-unstitched',
            'https://bonanzasatrangi.com/collections/sale-men-stitched'
                    
                   
    ]

    def parse(self, response):


        # html=response.text
        # with io.open("Bonanza.txt", "w", encoding="utf-8") as f:
        #     f.write(html)
    


        items=BrandssaleItem()

        today= date.today()
        #yyyy-mm-dd
        datee = today.strftime("%Y-%m-%d")

        all_div_quotes=response.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "large-up--one-third", " " ))]')
        
        for quotes in all_div_quotes:


            # title=quotes.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "grid-view-item__title", " " ))]/text()').get().strip()
            title=quotes.css(' .details a::text').get()
            
            
            if title is list:
                title=title[0]

            
            category_name=quotes.xpath('///*[contains(concat( " ", @class, " " ), concat( " ", "title-bold", " " ))]/text()').get()
            category_name=category_name.lower()
            

            if 'ready to wear' in category_name:
                category_name='kameezshalwar_stitched' 
                gender_category="female"
                
                category_id=1

            elif 'unstitched' in category_name:
                category_name='kameezshalwar_unstitched'
                gender_category="female" 
                category_id=2
            elif "sale men's stitched" in category_name:
                category_name='kameezshalwar_unstitched'
                gender_category="male" 
                category_id=4
            if "sale men's unstitched" in category_name:
                category_name='kameezshalwar_unstitched' 
                category_id=5

            elif 'fragrances' in category_name:
                category_name='fragrances'
                gender_category="female" 
                category_id=5
            elif 'beauty ' in category_name:
                category_name='cosmetics' 
                gender_category="female"
                category_id=5
                
          
            print('***************************')
            print(category_name)

            # sale_price=quotes.css('.product-price__sale::text').get()
            sale_price=quotes.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "product-price__sale", " " ))]/text()').get()
            # sale_price=int(re.findall('\d+', sale_price))
            print(sale_price)
            if sale_price is None:
                continue
            
            sale_price=int(float(sale_price[4:].replace(',', '')))

            price=quotes.css('.regular::text').get()
            print(price)
            if price is None:
                continue
            price=int(float(price[4:].replace(',', '')))

            product_link=quotes.css('.grid-view-item__link::attr(href)').get() 
            product_link='https://bonanzasatrangi.com/'+product_link 

            # image_link=quotes.css('.grid--uniform .grid__item .grid-view-item .grid-view_image  .primary ::attr(data-srcset)').get()
            image_link=response.css('.primary   ::attr(src)').get().replace('100', '360')
            # image_link=quotes.xpath('//a[contains(@href, "image")]/img/@src').extract()

            image_link2=response.css('.primary   ::attr(src)').get().replace('100', '360')

            # image_link2=quotes.xpath('//*[(@id = "Collection")]//*[contains(concat( " ", @class, " " ), concat( " ", "lazyloaded", " " ))]/@srcset').get()
            # image_link2=quotes.css('img').extract()
            if image_link2==None:
                image_link2=image_link
            
            


            items['brand_name'] ='bonanza'
            items['title']=title
            items['category_name'] =category_name

            items['gender_category'] =gender_category
            items['price']=price
            items['sale_price']=sale_price
            items['product_link']=product_link
            items['image_link']=image_link
            items['image_link2']=image_link2
            items['date']=datee
            items['rating']=5
            items['status']='avb'

            items['brand_id']=1
            items['category_id']=category_id
            items['gender_id']=1
            
            items['overview']=items['brand_name']+' '+items['gender_category']+' '+items['category_name']+' '+items['title']+' '+items['gender_category']

            yield items

        if category_name=='kameezshalwar_stitched' and gender_category=="female":
            
            next_page='https://bonanzasatrangi.com/collections/ready-to-wear-sale?page='+ str(BonanzaSpider.page_number)

            if BonanzaSpider.page_number <5:
                BonanzaSpider.page_number +=1
                yield response.follow(next_page,callback=self.parse)


        if category_name=='kameezshalwar_unstitched' and gender_category=="female":
            
            next_page='https://bonanzasatrangi.com/collections/unstitched-sale?page='+ str(BonanzaSpider.page_number2)

            if BonanzaSpider.page_number2 <3:
                BonanzaSpider.page_number2 +=1
                yield response.follow(next_page,callback=self.parse)

        if category_name=='kameezshalwar_unstitched' and gender_category=="male":       
            next_page='https://bonanzasatrangi.com/collections/sale-men-unstitched?page='+ str(BonanzaSpider.page_number3)
            if BonanzaSpider.page_number3 <2:
                BonanzaSpider.page_number3 +=1
                yield response.follow(next_page,callback=self.parse)

        if category_name=='kameezshalwar_stitched' and gender_category=="male":
            
            next_page='https://bonanzasatrangi.com/collections/sale-men-stitched?page='+ str(BonanzaSpider.page_number4)
            if BonanzaSpider.page_number4 <3:
                BonanzaSpider.page_number4 +=1
                yield response.follow(next_page,callback=self.parse)


        if category_name=='cosmetics':           
            next_page='https://bonanzasatrangi.com/collections/beauty-sale?page='+ str(BonanzaSpider.page_number5)

            if BonanzaSpider.page_number5 <6:
                BonanzaSpider.page_number5 +=1
                yield response.follow(next_page,callback=self.parse)
       
       
        if category_name=='fragrances':            
            next_page='https://bonanzasatrangi.com/collections/beauty-fragrances-sale?page='+ str(BonanzaSpider.page_number6)
            if BonanzaSpider.page_number6 <6:
                BonanzaSpider.page_number6 +=1
                yield response.follow(next_page,callback=self.parse)









       
    