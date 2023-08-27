class ChangeBalanceTypeAsFloatOnAccounts < ActiveRecord::Migration[7.0]
  def change
    change_column :accounts, :balance, :float
  end
end
