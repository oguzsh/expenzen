# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  first_name             :string           not null
#  last_name              :string           not null
#  middle_name            :string
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#
class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :accounts, dependent: :destroy
  has_many :transactions, dependent: :destroy

  validates :email, presence: true, uniqueness: { case_sensitive: true }
  validates :email, length: { maximum: 255 }

  validates :first_name, length: { maximum: 255 }
  validates :last_name, length: { maximum: 255 }

  def full_name
    [first_name, last_name].join(' ').strip
  end

  def full_name_with_middle
    return full_name if middle_name.nil?

    [first_name, middle_name, last_name].join(' ').strip
  end
end
