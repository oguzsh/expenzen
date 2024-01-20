module Recurring
  extend ActiveSupport::Concern

  included do
    enum recurring_period: { not_recurring: 0, daily: 1, weekly: 2, monthly: 3, yearly: 4 }
  end
end
