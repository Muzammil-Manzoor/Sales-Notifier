import scrapy
from scrapy.utils.response import open_in_browser
from scrapy.http import FormRequest
from ..items import BrandssaleItem
from datetime import date
import io

class KhaadiSpider(scrapy.Spider):
    name = 'khaadi'

    page_number= 2
    page_number2= 2
    category_name=''

    # allowed_domains = ['https://pk.khaadi.com/sale.html']
    start_urls = [
                    # 'https://pk.khaadi.com/sale/ready-to-wear.html?p=1',
                    'https://pk.khaadi.com/sale/unstitched.html?p=1',
                    'https://pk.khaadi.com/sale/accessories.html'

                    
                   
    ]

    def parse(self, response):


        # html=response.text
        # with io.open("khaadi.txt", "w", encoding="utf-8") as f:
        #     f.write(html)
    


        items=BrandssaleItem()

        today= date.today()
        #yyyy-mm-dd
        datee = today.strftime("%Y-%m-%d")

        all_div_quotes=response.css('div.type3')
        
        for quotes in all_div_quotes:
            title=quotes.css('.product-item-link::text').get().replace('\r\n','').strip()
            if title is list:
                title=title[0]
                
            #category_name ='accessories'
            a=quotes.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "category3445", " " ))]//strong/text()').get()
            print('*******************************')
            print(a)
            #for accesories
            b=quotes.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "category1395", " " ))]//strong/text()').get()
            print(b)   
            #for unstitched
            c=quotes.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "category1390", " " ))]//strong/text()').get()
            print(c)
            
            if a=='Ready to wear' and b==None and c==None:
                category_name='kameezshalwar_stitched'
                category_id=4
            elif a==None and b=='Accessories' and c==None:
                category_name='accessories'
                category_id=10
            else:
                category_name='kameezshalwar_unstitched' 
                category_id=5
            

            sale_price=quotes.css('.special-price .price::text').get()

            sale_price=sale_price[4:].replace(',', '')

            price=quotes.css('.sly-old-price .price::text').get() 
            price=price[4:].replace(',', '')
            
            product_link=quotes.css('a.product-item-link::attr(href)').get() 
            image_link=quotes.css('.product-image-photo::attr(data-src)').get()
            image_link2=quotes.css('.hover_image::attr(data-src)').get()
            if image_link2==None:
                image_link2=image_link
            
            #cleaning
            # try:
            #     if(type(brand_name) is list):
            #         brand_name = brand_name[0]
            #     else:
            #         brand_name=brand_name
            #     if(type(title) is list):
            #         title = title[0]
            #     else:
            #         title=title
            #     if(type(category_name) is list):
            #         category_name = category_name[0]
            #     else:
            #         category_name=category_name
            #     if(type(gender_category) is list):
            #         gender_category = gender_category[0]
            #     else:
            #         gender_category=gender_category

            #     if(type(price) is list):
            #         price = price[0]
            #         print('************************************')
            #         print(price)
            #     else:
            #         price=price
            #     if(type(sale_price) is list):
            #         sale_price = sale_price[0]
            #     else:
            #         sale_price=sale_price
            #     if(type(product_link) is list):
            #         product_link = product_link[0]
            #     else:
            #         product_link=product_link
            #     if(type(image_link) is list):
            #         image_link = image_link[0]
            #     else:
            #         image_link=image_link


            #     if(type(image_link2) is list):
            #         image_link2 = image_link2[0]
            #     else:
            #         image_link2=image_link2
            #     if(type(date) is list):
            #         datee = datee[0]
            #     else:
            #         datee=datee
            #     if(type(category_id) is list):
            #         category_id = category_id[0]
            #     else:
            #         category_id=category_id
            # except:
            #     pass

            items['brand_name'] ='khaadi'
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
            
            next_page='https://pk.khaadi.com/sale/ready-to-wear.html?p='+ str(KhaadiSpider.page_number)

            if KhaadiSpider.page_number <8:
                KhaadiSpider.page_number +=1
                yield response.follow(next_page,callback=self.parse)


        if category_name=='kameezshalwar_unstitched':
            
            next_page='https://pk.khaadi.com/sale/unstitched.html?p='+ str(KhaadiSpider.page_number2)

            if KhaadiSpider.page_number2 <8:
                KhaadiSpider.page_number2 +=1
                yield response.follow(next_page,callback=self.parse)








       
    