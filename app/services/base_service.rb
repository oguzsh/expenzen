class BaseService
  class << self
    def find_record(model:, id:)
      model.find_by!(id: id)
    rescue ActiveRecord::RecordNotFound
      raise_error("#{model.name} not found!")
    end

    def raise_error(message:)
      raise GraphQL::ExecutionError, message
    end
  end
end
