class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :owner_id, :name, :description, :permission
end
