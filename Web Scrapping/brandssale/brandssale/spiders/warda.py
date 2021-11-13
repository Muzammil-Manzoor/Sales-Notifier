import scrapy
from scrapy.utils.response import open_in_browser
from scrapy.http import FormRequest
from ..items import BrandssaleItem
from datetime import date
import io

class WardaSpider(scrapy.Spider):
    name = 'warda'

    page_number= 2
    page_number2= 2
    category_name=''

    # allowed_domains = ['https://pk.khaadi.com/sale.html']
    start_urls = [
         'https://www.warda.com.pk/collections/unstitched-sale',
    # 'file:///E:/Semester%207/pages%20html/warda_unstitched.html'
    'https://www.warda.com.pk/collections/pret-sale'
                    
                   
    ]

    def parse(self, response):


        # html=response.text
        # with io.open("warda.txt", "w", encoding="utf-8") as f:
        #     f.write(html)
    


        items=BrandssaleItem()

        today= date.today()
        #yyyy-mm-dd
        datee = today.strftime("%Y-%m-%d")

        all_div_quotes=response.css('.no_crop_image ')
        
        for quotes in all_div_quotes:



            title=quotes.css('.product-title::text').get().replace('\r\n','').strip()
            if title is list:
                title=title[0]
#  SOme product not in sale but showa so we use to break
            if title is None:
                continue

            
            category_name=quotes.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "bd-title", " " ))]//a/text()').get()
            category_name=category_name.lower()

            if 'unstitched' in category_name:
                category_name='kameezshalwar_unstitched' 
                category_id=5

            else:
                category_name='kameezshalwar_stitched'
                category_id=4
                
          
           

            sale_price=quotes.css('.special-price .money::text').get()
            if sale_price is None:
                continue
            sale_price=int(float(sale_price[3:].replace(',', '')))

            price=quotes.css('.old-price .money::text').get() 
            if price is None:
                continue
            price=int(float(price[3:].replace(',', '')))

            product_link=quotes.css('.product-grid-image::attr(href)').get() 
            product_link='https://www.warda.com.pk'+product_link 

            image_link=quotes.css('.pr-swp-img::attr(src)').get()
            image_link2=quotes.css('.hover-image::attr(src)').get()
            if image_link2==None:
                image_link2=image_link
            
            


            items['brand_name'] ='warda'
            items['title']=title
            items['category_name'] =category_name

            items['gender_category'] ='female'
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

        if category_name=='kameezshalwar_stitched':
            
            next_page='https://www.warda.com.pk/collections/pret-sale?page='+ str(WardaSpider.page_number)

            if WardaSpider.page_number <3:
                WardaSpider.page_number +=1
                yield response.follow(next_page,callback=self.parse)


        if category_name=='kameezshalwar_unstitched':
            
            next_page='https://www.warda.com.pk/collections/unstitched-sale?page='+ str(WardaSpider.page_number2)

            if WardaSpider.page_number2 <3:
                WardaSpider.page_number2 +=1
                yield response.follow(next_page,callback=self.parse)








       
    