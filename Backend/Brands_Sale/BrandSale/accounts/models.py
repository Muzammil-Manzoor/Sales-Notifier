from django.db import models
from django.contrib.auth.models import AbstractUser, AbstractBaseUser, PermissionsMixin, BaseUserManager
import pandas as pd
class UserAccountManager(BaseUserManager):

      # pick rules row for recommendation system
    def pick_rules(self,row, user_interest_list):
        
        consider_antecedents = True
        consider_consequents = True

        # Loop through all antecedents and find is this antecedents are
        # related to user intersts or not?.
        for item in row.antecedents:
            if item not in user_interest_list:
                consider_antecedents = False

            if  consider_antecedents:
            # Antecedents are matched

            # Now check if consequents of this rule is not in users Interests
            # then this rule is for this user.
                for item in row.consequents:
                    if item in user_interest_list:
                        consider_consequents = False 
                if(consider_consequents):
                # This rule is matched with the user.
                    return True
                else:
                    return False
            else:
                return False


    def create_user(self, email,interested_brands,recommended_brands, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')
        email = self.normalize_email(email)
        username=extra_fields['first_name']
        print("*************************")
        print(extra_fields)
        print(username)

        user = self.model(email=email,username=username, **extra_fields)

        print("interested brands")

        rul_df=pd.read_csv('./accounts/brands_recommendation.csv',converters={'antecedents': eval, 'consequents': eval})            # get user name and interests of new user.
        userinterests =interested_brands

        user.interested_brands=interested_brands
            # convert user interest into list.
        u_i_list = userinterests.split(',')
        applied_rul_df =  pd.DataFrame(columns=rul_df.columns)
            
        for index, row in  rul_df.iterrows():
            if(self.pick_rules(row,u_i_list)):
                applied_rul_df = applied_rul_df.append(row)                    
            # get a rule which have higest lift 
            if(applied_rul_df.shape[0] >= 1):
                columns_names = ['antecedents', 'consequents', 'antecedent support', 'consequent support', 'support', 'confidence', 'lift', 'leverage', 'conviction']    
                selected_rule= applied_rul_df.iloc[applied_rul_df.lift.argmax()]
                userSeleted_Interest = selected_rule.consequents
                my_string = ','.join(userSeleted_Interest)
                user.recommended_brands=my_string            
            else:
                # In case no rule is matched with the user Interests.
                user.recommended_brands='khaadi'

            # dict3=request.data.update(new_user)
        print(recommended_brands)       
        user.set_password(password)
        print("helloooowww userr rgister")
        print(user.recommended_brands)  
        user.save()
        return user
  
    def create_superuser(self,first_name,interested_brands,recommended_brands, email, password):
        """
        Creates and saves a superuser with the given email and password.
        """
        user = self.create_user(
            first_name=first_name,
            email=email,
            interested_brands=interested_brands,
            recommended_brands=recommended_brands,

            password=password,
        )
        user.staff = True
        user.admin = True
        user.save(using=self._db)
        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    username = models.CharField(max_length=255,unique=True)
    first_name = models.CharField(max_length=255,unique=True)
    last_name = models.CharField(max_length=255,blank=True)
    interested_brands = models.CharField(max_length=255,blank=True)
    recommended_brands = models.CharField(max_length=255,blank=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()
   
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email','interested_brands','recommended_brands','last_name','first_name']

    def get_full_name(self):
        return self.first_name

    def get_short_name(self):
        return self.first_name
    
    def __str__(self):
        return self.email
