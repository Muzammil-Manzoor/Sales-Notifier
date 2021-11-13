import scrapy
from scrapy.utils.response import open_in_browser
from scrapy.http import FormRequest
from ..items import BrandssaleItem
from datetime import date
import io

class BeechtreeSpider(scrapy.Spider):
    name = 'beechtree'

    page_number= 2
    page_number2= 2
    category_name=''

    # allowed_domains = ['https://www.bareeze.com/pk/sale/shawls.html']
    start_urls = [
        
    #    'https://beechtree.pk/collections/sale-unstitched'
        'file:///E:/Semester%207/pages%20html/beechtree.html'    
                   
    ]

    def parse(self, response):
        
        # html=response.text
        # with io.open("beechtree.txt", "w", encoding="utf-8") as f:
        #     f.write(html)

        items=BrandssaleItem()

        today= date.today()
        #yyyy-mm-dd
        datee = today.strftime("%Y-%m-%d")

        all_div_quotes=response.css('.full-width-link ')
        
        for quotes in all_div_quotes:



            title=quotes.css('.visually-hidden::text').get().replace('\r\n','').strip()
            if title is list:
                title=title[0]


            
            # category_name=quotes.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "category75", " " ))]//strong/text()').get()
            # category_name=quotes.css('.cstm-styling span').extract()
            # print('****************************************************')
            # print(category_name)

            # category_name=category_name.lower()
            category_name='kameezshalwar_unstitched' 
            category_id=2
            # if 'casuals' in category_name:
            #     category_name='kameezshalwar_unstitched' 
            #     category_id=2
            # elif 'shawls' in category_name:
            #     category_name='shawl' 
            #     category_id=7
            # elif 'formals' in category_name:
            #     category_name='kameezshalwar_stitched' 
            #     category_id=1
            # elif 'bottoms' in category_name:
            #     category_name='pant' 
            #     category_id=5
                
            sale_price=quotes.css('.price-item--sale .money::text').get()
            
            # sale_price=int(float(sale_price[4:].replace(',', '')))

            price=quotes.css('.price-item--regular .money::text').get() 
            
            # price=int(float(price[4:].replace(',', '')))

            product_link=quotes.css('.product-card .grid-view-item__link::attr(href)').get() 

            image_link=quotes.css('img ::attr(src)').get()
            image_link2=quotes.css('.grid-view-item__image img::attr(src)').get()
            if image_link2==None:
                image_link2=image_link
            
            


            items['brand_name'] ='Bareeze'
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

#         if category_name=='kameezshalwar_stitched':
            
#             next_page='https://www.bareeze.com/pk/sale/formals.html?p='+ str(BeechtreeSpider.page_number)

#             if BeechtreeSpider.page_number <4:
#                 BeechtreeSpider.page_number +=1
#                 yield response.follow(next_page,callback=self.parse)


#         if category_name=='kameezshalwar_unstitched':
            
#             next_page='https://www.bareeze.com/pk/sale/casuals.html?p='+ str(BeechtreeSpider.page_number2)

#             if BeechtreeSpider.page_number2 <4:
#                 BeechtreeSpider.page_number2 +=1
#                 yield response.follow(next_page,callback=self.parse)



#         if category_name=='pant':
            
#             next_page='https://www.bareeze.com/pk/sale/bottoms.html?p='+ str(BeechtreeSpider.page_number2)

#             if BeechtreeSpider.page_number2 <4:
#                 BeechtreeSpider.page_number2 +=1
#                 yield response.follow(next_page,callback=self.parse)


#         if category_name=='shawl':
            
#             next_page='https://www.bareeze.com/pk/sale/shawls.html?p='+ str(BeechtreeSpider.page_number2)

#             if BeechtreeSpider.page_number2 <4:
#                 BeechtreeSpider.page_number2 +=1
#                 yield response.follow(next_page,callback=self.parse)