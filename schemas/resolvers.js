const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
      }
      throw new AuthenticationError('You need to be logged in!');
    },


  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addDrink: async (parent, {drinkData}, context) => {
    if(context.user){
      const updateUser = await User.findByIdAndUpdate(
        { _id: context.user._id }, 
        {$push:{userDrinks: drinkData}},
        {new: true}
      );
      
      return updateUser;
    }
    }
    // addThought: async (parent, { thoughtText, thoughtAuthor }) => {
    //   return Drink.create({ thoughtText, thoughtAuthor });
    // },
    // addComment: async (parent, { thoughtId, commentText }) => {
    //   return Drink.findOneAndUpdate(
    //     { _id: thoughtId },
    //     {
    //       $addToSet: { comments: { commentText } },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },
    // removeThought: async (parent, { thoughtId }) => {
    //   return Drink.findOneAndDelete({ _id: thoughtId });
    // },
    // removeComment: async (parent, { thoughtId, commentId }) => {
    //   return Drink.findOneAndUpdate(
    //     { _id: thoughtId },
    //     { $pull: { comments: { _id: commentId } } },
    //     { new: true }
    //   );
    // },
  },
};

module.exports = resolvers;
