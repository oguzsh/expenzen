# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :email, String, null: false
    field :first_name, String, null: false
    field :full_name, String, null: false
    field :full_name_with_middle, String, null: false
    field :id, ID, null: false
    field :last_name, String, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
