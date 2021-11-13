import scrapy
from scrapy.utils.response import open_in_browser
from scrapy.http import FormRequest
from ..items import BrandssaleItem
from datetime import date
import io

class AlkaramSpider(scrapy.Spider):
    name = 'alkaram'

    page_number= 2
    page_number2= 2
    page_number3=2
    page_number4=2
    page_number5=2

    category_name=''

    # allowed_domains = ['https://chenone.com/collections/women']
    start_urls = [
            'https://www.alkaramstudio.com/sale/men?product_list_limit=36' 
            # 'https://www.alkaramstudio.com/sale/kids?product_list_limit=36'

            # 'https://www.alkaramstudio.com/sale/activewear?product_list_limit=36'
            
            # 'https://www.alkaramstudio.com/sale/unstitched?product_list_limit=24'
            
            # 'https://www.alkaramstudio.com/sale/pret?product_list_limit=36'
                   
    ]

    def parse(self, response):
       
        items=BrandssaleItem()

        today= date.today()
        #yyyy-mm-dd
        datee = today.strftime("%Y-%m-%d")

        all_div_quotes=response.css('.product-item')
        for quotes in all_div_quotes:
            title=quotes.css('.product-item-link::text').get().replace('\r\n','').strip()
            # title=quotes.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "no-transition", " " ))]/text()').get()            
            
            if title is list:
                title=title[0]
                # if url men
            category_name="kameezshalwar_unstitched"
            category_id=2
            gender_category='male'

# #                   if url women unstitchecd
            # category_name="kameezshalwar_unstitched"
            # category_id=1
            # gender_category='female'

# #                   if url women stitchecd

            # category_name="kameezshalwar_stitched"
            # category_id=2
            # gender_category='female'
# #                   if url women westren

            # category_name="shirt_pant"
            # category_id=2
            # gender_category='female'


# #                   if url kid 

            # category_name="shirt_pant"
            # category_id=2
            # gender_category='kid'



            sale_price=quotes.css('.normal-price .price::text').get()
            if sale_price is None:
                sale_price=quotes.css('.special-price .price::text').get() 
            sale_price=int(float(sale_price[3:].replace(',', '')))
            

            
            
            price=quotes.css('.sly-old-price .price::text').get()
            if price is None:
                price=quotes.css('.old-price .price::text').get() 
            
            price=int(float(price[3:].replace(',', '')))

            

            product_link=quotes.css('a::attr(href)').get() 

            image_link=quotes.css('img::attr(data-src)').get()
            image_link2=quotes.css('.img-hover-show::attr(data-src)').get()
            if image_link2==None:
                image_link2=image_link
            
            

            items['brand_name'] ='Alkaram studio'
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

        # if category_name=='kameezshalwar_stitched' and gender_category=="female":
            
        #     next_page='https://www.limelight.pk/collections/pret-sale?page='+ str(AlkaramSpider.page_number)

        #     if AlkaramSpider.page_number <3:
        #         AlkaramSpider.page_number +=1
        #         yield response.follow(next_page,callback=self.parse)


        # if category_name=='kameezshalwar_unstitched':
            
        #     next_page='https://www.limelight.pk/collections/unstitched-sale?page='+ str(AlkaramSpider.page_number2)

        #     if AlkaramSpider.page_number2 <3:
        #         AlkaramSpider.page_number2 +=1
        #         yield response.follow(next_page,callback=self.parse)

        # # if category_name=='shirt':
            
        # #     next_page='https://www.junaidjamshed.com/woman-sale/women-kurti.html?p='+ str(AlkaramSpider.page_number3)

        # #     if AlkaramSpider.page_number3 <3:
        # #         AlkaramSpider.page_number3 +=1
        # #         yield response.follow(next_page,callback=self.parse)

        # if category_name=='shirt_pant' and gender_category=="female" :
            
        #     next_page='https://www.limelight.pk/collections/western-sale?page='+ str(AlkaramSpider.page_number4)

        #     if AlkaramSpider.page_number4 <3:
        #         AlkaramSpider.page_number4 +=1
        #         yield response.follow(next_page,callback=self.parse)


        # if category_name=='shirt_pant' and gender_category=="kid" :
            
        #     next_page='https://www.limelight.pk/collections/girls-pret-sale?page='+ str(AlkaramSpider.page_number5)

        #     if AlkaramSpider.page_number5 <3:
        #         AlkaramSpider.page_number5 +=1
        #         yield response.follow(next_page,callback=self.parse)






    
        

       
    