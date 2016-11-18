require 'sinatra/base'

class GracePrince < Sinatra::Base
  get '/' do
    erb :video_view, :layout => false
  end

  get '/index' do
    erb :index
  end

  get '/ceppo' do
    erb :'./group/one'
  end

  get '/scolpire' do
    erb :'./group/two'
  end

  get '/linea' do
    erb :'./group/three'
  end

  get '/press' do
    erb :'./footer/press'
  end

  get '/process' do
    erb :'./footer/process'
  end

  get '/designwork' do
    erb :'./footer/design_work'
  end

  get '/book' do
    erb :'./footer/book'
  end

  get '/contact' do
    erb :'./footer/contact'
  end


  # start the server if ruby file executed directly
  run! if app_file == $0
end
