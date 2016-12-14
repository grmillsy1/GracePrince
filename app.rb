require 'sinatra/base'

class GracePrince < Sinatra::Base
  get '/' do
    erb :video_view, :layout => false
  end

  get '/index' do
    erb :index
  end

  get '/ceppo' do
    erb :'./group/ceppo'
  end

  get '/scolpire' do
    erb :'./group/scolp'
  end

  get '/linea' do
    erb :'./group/linea'
  end

  get '/press' do
    erb :'./footer/press'
  end

  get '/past' do
    erb :'./footer/past'
  end

  get '/people' do
    erb :'./footer/contact'
  end



  # start the server if ruby file executed directly
  run! if app_file == $0
end
