ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.smtp_settings = {
	:address				=>  'smtp.sendgrid.net',
	:port					=>  '587',
	:authentication			=>  :plain,
	:user_name				=>  'app101511935@heroku.com',
	:password				=>  'gjcldhqa2574',
	:domain					=>  'hellohotel.herokuapp.com',
	:enable_starttls_auto	=>  true
}