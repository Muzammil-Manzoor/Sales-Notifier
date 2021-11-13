import scrapy
from scrapy.utils.response import open_in_browser
from scrapy.http import FormRequest
from ..items import BrandssaleItem
from datetime import date
import io

class JunaidSpider(scrapy.Spider):
    name = 'junaid'

    page_number= 2
    page_number2= 2
    page_number3=2

    category_name=''

    # allowed_domains = ['https://pk.khaadi.com/sale.html']
    start_urls = [
                    'https://www.junaidjamshed.com/woman-sale/women-unstitched.html',
                    'https://www.junaidjamshed.com/woman-sale/women-stitched.html?p=1',
                    'https://www.junaidjamshed.com/woman-sale/women-kurti.html?p=1'
                    
                   
    ]

    def parse(self, response):


        # html=response.text
        # with io.open("junaid.txt", "w", encoding="utf-8") as f:
        #     f.write(html)
    


        items=BrandssaleItem()

        today= date.today()
        #yyyy-mm-dd
        datee = today.strftime("%Y-%m-%d")

        all_div_quotes=response.css('div.product-item-info')
        
        for quotes in all_div_quotes:
            title=quotes.css('.product-item-link::text').get().replace('\r\n','').strip()
            if title is list:
                title=title[0]


            category_name=quotes.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "base", " " ))]/text()').get()
            category_name=category_name.lower()

            gender_category=quotes.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "base", " " ))]/text()').get()
            gender_category=gender_category.lower()

            if 'unstitched' in category_name:
                category_name='kameezshalwar_unstitched' 
                category_id=2

            elif 'stitched' in category_name:
                category_name='kameezshalwar_stitched'
                category_id=1

            else:
                category_name='shirt'
                category_id=4

            if 'women' in gender_category:
                gender_category='female'
            else:
                gender_category='male'
                

            sale_price=quotes.css('.special-price .price::text').get()
            if sale_price is None:
                continue
            sale_price=int(float(sale_price[3:].replace(',', '')))
            if sale_price is None:
                continue


            price=quotes.css('.old-price .price::text').get() 
            price=int(float(price[3:].replace(',', '')))


            product_link=quotes.css('a.product-item-link::attr(href)').get() 
            image_link=quotes.css('.product-image-photo::attr(data-original)').get()
            image_link2=quotes.css('.product-image-photo::attr(data-hoversrc)').get()
            if image_link2==None:
                image_link2=image_link
            
            

            items['brand_name'] ='Junaid Jamshed'
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

        if category_name=='kameezshalwar_stitched':
            
            next_page='https://www.junaidjamshed.com/woman-sale/women-stitched.html?p='+ str(JunaidSpider.page_number)

            if JunaidSpider.page_number <3:
                JunaidSpider.page_number +=1
                yield response.follow(next_page,callback=self.parse)


        if category_name=='kameezshalwar_unstitched':
            
            next_page='https://www.junaidjamshed.com/woman-sale/women-unstitched.html?p='+ str(JunaidSpider.page_number2)

            if JunaidSpider.page_number2 <3:
                JunaidSpider.page_number2 +=1
                yield response.follow(next_page,callback=self.parse)

        if category_name=='shirt':
            
            next_page='https://www.junaidjamshed.com/woman-sale/women-kurti.html?p='+ str(JunaidSpider.page_number3)

            if JunaidSpider.page_number3 <3:
                JunaidSpider.page_number3 +=1
                yield response.follow(next_page,callback=self.parse)








       
    