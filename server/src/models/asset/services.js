const Asset = require(".");

exports.getAll = async (data) => {
    try {
        const asset = await Asset.find(data).populate("createdBy");
        return asset;
    } catch (error) {
        throw error;
    }
};

exports.create = async (data) => {
    try {
        const asset = await Asset.create(data);
        return asset;
    } catch (error) {
        throw error;
    }
};

exports.update = async (id, updateValues) => {
    try {
      const asset = await Asset.findByIdAndUpdate(
        id,
        { $set: updateValues },
        { new: true }
      );
      return asset;
    } catch (error) {
      throw error;
    }
  };