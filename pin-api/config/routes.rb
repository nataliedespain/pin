Rails.application.routes.draw do

  post 'authenticate', to: 'authentication#authenticate'

  resources :users
  resources :cities
  resources :places
  resources :follows

  get 'follows/following/:id', to: 'follows#following'
  get 'follows/followers/:id', to: 'follows#followers'

  get 'feed/:id', to: 'feed#feed'

end
