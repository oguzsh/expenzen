# frozen_string_literal: true

Rails.application.routes.draw do
  mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql' if Rails.env.development?

  devise_for(:users,
             path: '',
             path_names: {
               sign_in: 'login',
               sign_out: 'logout',
               sign_up: 'register'
             })

  post '/graphql', to: 'graphql#execute'

  root 'dashboard#index'
  get '*path', to: 'dashboard#index', constraints: lambda { |request|
                                                     (!request.xhr? && request.format.html?) || request.format == :json
                                                   }
end
