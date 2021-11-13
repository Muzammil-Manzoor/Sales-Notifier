import scrapy
from scrapy.utils.response import open_in_browser
from scrapy.http import FormRequest
from ..items import BrandssaleItem
from datetime import date
import io

class LimelightSpider(scrapy.Spider):
    name = 'limelight'

    page_number= 2
    page_number2= 2
    page_number3=2
    page_number4=2
    page_number5=2

    category_name=''

    # allowed_domains = ['https://www.limelight.pk/collections/unstitched-sale']
    start_urls = [
                    'https://www.limelight.pk/collections/unstitched-sale',
'https://www.limelight.pk/collections/western-sale',
# 'https://www.limelight.pk/collections/pret-sale' ,
'https://www.limelight.pk/collections/men-sale-1' ,
'https://www.limelight.pk/collections/trousers-sale',
'https://www.limelight.pk/collections/bags-and-wallets-sale',
'https://www.limelight.pk/collections/jewellery-sale' ,
'https://www.limelight.pk/collections/sale-scarves-dupatta' ,
# 'https://www.limelight.pk/collections/girls-pret-sale'               
                   
    ]

    def parse(self, response):

        items=BrandssaleItem()

        today= date.today()
        #yyyy-mm-dd
        datee = today.strftime("%Y-%m-%d")

        all_div_quotes=response.css('div .mobile-half')
        for quotes in all_div_quotes:
            title=quotes.css('.product-details h3::text').get().replace('\r\n','').strip()
            # title=quotes.xpath('//*[(@id = "product-loop")]//h3/text()').get()            

            if title is list:
                title=title[0]
            if title is '':
                continue

            # category_name=quotes.css('.section-title ::text').get()
            
            category_name=quotes.xpath('//*[(@id = "bc-sf-filter-collection-header")]/text()').get()
            category_name=category_name.lower()
            gender_category=quotes.xpath('//*[(@id = "bc-sf-filter-collection-header")]/text()').get()

            # gender_category=quotes.xpath('//*[(@id = "bc-sf-filter-collection-header")]/text()').get()
            gender_category=gender_category.lower()

            if 'unstitched' in category_name:
                category_name='kameezshalwar_unstitched' 
                category_id=1
            elif 'girls pret' in category_name:
                category_name='shirt_pant'
                category_id=1

            elif 'western' in category_name:
                category_name='shirt_pant'
                category_id=1

            elif 'pret' in category_name:
                category_name='kameezshalwar_stitched'
                category_id=1


            elif 'trousers' in category_name:
                category_name='pant'
                category_id=1

            elif 'bags' in category_name:
                category_name='bags'
                category_id=1

            
            elif 'dupatta' in category_name:
                category_name='shawl'
                category_id=1
            elif 'men' in category_name:
                category_name='kameezshalwar_stitched'
                category_id=1

            else:
                pass
                # category_name='shirt'
                category_id

            if 'men' in gender_category:
                gender_category='male'
            elif 'girls' in gender_category:
                gender_category='kid'
            else:
                gender_category='female'
                

            sale_price=quotes.css('.onsale .money::text').get()
            if sale_price is None:
                continue
            sale_price=int(float(sale_price[3:].replace(',', '')))
            if sale_price is None:
                continue


            price=quotes.css('.was-listing .money::text').get() 
            price=int(float(price[3:].replace(',', '')))

            

            product_link=quotes.css('.ci a::attr(href)').get() 
            product_link='https://www.limelight.pk'+product_link

            image_link=quotes.css('.reveal img::attr(data-src)').get()
            image_link2=quotes.css('.hidden img::attr(data-src)').get()
            if image_link2==None:
                image_link2=image_link
            
            

            items['brand_name'] ='limelight'
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
            
            next_page='https://www.limelight.pk/collections/pret-sale?page='+ str(LimelightSpider.page_number)

            if LimelightSpider.page_number <3:
                LimelightSpider.page_number +=1
                yield response.follow(next_page,callback=self.parse)


        if category_name=='kameezshalwar_unstitched':
            
            next_page='https://www.limelight.pk/collections/unstitched-sale?page='+ str(LimelightSpider.page_number2)

            if LimelightSpider.page_number2 <3:
                LimelightSpider.page_number2 +=1
                yield response.follow(next_page,callback=self.parse)

        # if category_name=='shirt':
            
        #     next_page='https://www.junaidjamshed.com/woman-sale/women-kurti.html?p='+ str(LimelightSpider.page_number3)

        #     if LimelightSpider.page_number3 <3:
        #         LimelightSpider.page_number3 +=1
        #         yield response.follow(next_page,callback=self.parse)

        if category_name=='shirt_pant' and gender_category=="female" :
            
            next_page='https://www.limelight.pk/collections/western-sale?page='+ str(LimelightSpider.page_number4)

            if LimelightSpider.page_number4 <3:
                LimelightSpider.page_number4 +=1
                yield response.follow(next_page,callback=self.parse)


        if category_name=='shirt_pant' and gender_category=="kid" :
            
            next_page='https://www.limelight.pk/collections/girls-pret-sale?page='+ str(LimelightSpider.page_number5)

            if LimelightSpider.page_number5 <3:
                LimelightSpider.page_number5 +=1
                yield response.follow(next_page,callback=self.parse)






    
        

       
    