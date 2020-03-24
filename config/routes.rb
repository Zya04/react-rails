Rails.application.routes.draw do

  # resources :pages, only: [:index]
  # resources :article, only: [:index]

  # match '*article', to: 'article#index', via: :all
  # match '*page', to: 'pages#index', via: :all


  get '/article', action: :index, controller: 'article'
  get '/article/delete', action: :index, controller: 'article'
  get '/article/post', action: :index, controller: 'article'

  get '/page', action: :index, controller: 'pages'
  get '/page/about', action: :index, controller: 'pages'
  get '/page/contact', action: :index, controller: 'pages'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
