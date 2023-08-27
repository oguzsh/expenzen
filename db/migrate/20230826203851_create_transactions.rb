class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.float :amount, null: false
      t.integer :transaction_type, default: 0, null: false
      t.datetime :transaction_date, null: false
      t.text :note, null: true

      t.references :category, null: false
      t.references :account, null: false
      t.timestamps
    end
  end
end
