import scrapy
from scrapy.utils.response import open_in_browser
from scrapy.http import FormRequest
from ..items import BrandssaleItem
from datetime import date
import io



class MariabSpider(scrapy.Spider):
    name = 'mariab'
   # allowed_domains = ['https://www.mariab.pk/sale/unstitched.html']

    page_number= 2
    page_number2=2
    page_number3=2
    category_name=''
# run kid individual
    start_urls = [
        # 'https://www.mariab.pk/sale/unstitched.html/',
        # 'https://www.mariab.pk/sale/pret.html',
        'https://www.mariab.pk/sale/sale-kids.html#/page/1'
     
    ]

    def parse(self, response):
        # html=response.text
        # with io.open("khaadi.txt", "w", encoding="utf-8") as f:

        #     f.write(html)


        items=BrandssaleItem()

        today= date.today()
        datee = today.strftime("%Y-%m-%d")

        all_div_quotes=response.css('div.fhover')
        
        for quotes in all_div_quotes:
            title=quotes.css('.product-name a::text').get().replace('\r\n','').strip()
            title=title.lower()

            if 'unstitched' in title:
                category_name='kameezshalwar_unstitched' 
                category_id=5

            else:
                category_name='kameezshalwar_stitched'
                category_id=4

            category_name= 'shirt_pant'
            # gendeer
            category_id=3

            sale_price=quotes.css('.special-price .price::text').get()


            price=quotes.css('.old-price .price::text').get()

            if sale_price is not None:
                sale_price=sale_price.replace('\r\n','').strip()
                sale_price=int(float(sale_price[4:].replace(',', '')))

            if price is not None:
                price=price.replace('\r\n','').strip()
                price=int(float(price[4:].replace(',', '')))


            product_link=quotes.css('a.product-image::attr(href)').get() 
            
            image_link=quotes.css('.product-image img::attr(src)').get()
            
            if(len(image_link)>200):

                continue

            image_link2=quotes.css('.backImage::attr(src)').get()
            if image_link2==None:
                image_link2=image_link
            
            items['brand_name'] ='MariaB'
            items['title']=title
            items['category_name'] =category_name

            items['gender_category'] ='Female'
            items['price']=price
            items['sale_price']=sale_price
            items['product_link']=product_link
            items['image_link']=image_link
            items['image_link2']=image_link2
            items['date']=datee
            items['rating']='Good'
            items['status']='avb'

            items['brand_id']=5
            items['category_id']=category_id
            items['gender_id']=3
            items['overview']=items['brand_name']+' '+items['gender_category']+' '+items['category_name']+' '+items['title']+' '+items['gender_category']


            yield items

        
        


        if category_name=='kameezshalwar_stitched':
            
            next_page='https://www.mariab.pk/ready-pret/m-basics.html#/page/='+str(MariabSpider.page_number)

            if MariabSpider.page_number <5:
                MariabSpider.page_number +=1
                yield response.follow(next_page,callback=self.parse)


        if category_name=='kameezshalwar_unstitched':
            
            next_page='https://www.mariab.pk/sale/unstitched.html#/page/'+ str(MariabSpider.page_number2)

            if MariabSpider.page_number2 <3:
                MariabSpider.page_number2 +=1
                yield response.follow(next_page,callback=self.parse)

        if category_name=='kid':
            
            next_page='https://www.mariab.pk/sale/sale-kids.html#/page/2'+ str(MariabSpider.page_number3)

            if MariabSpider.page_number3 <3:
                MariabSpider.page_number3 +=1
                yield response.follow(next_page,callback=self.parse)