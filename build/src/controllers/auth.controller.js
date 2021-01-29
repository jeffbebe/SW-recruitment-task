"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../models/user.model");
exports.postLogin = async (req, res, next) => {
    const userRepository = connection.getRepository(user_model_1.UserModel);
    const email = req.body.email;
    const password = req.body.password;
    try {
        const user = await userRepository.findOne({
            email: email,
        });
        if (!user) {
            throw new Error("There is no such user");
        }
        //with bcrypt we always go into the then block whether it's correct password or not, returns true if they match,false if dont
        //const doMatch = await bcrypt.compare(password, user.password);
        /*     if (!doMatch) {
          throw new WrongCredentials("Wrong password", 400);
        } */
        res.send(); //
    }
    catch (err) {
        next(err);
    }
};
exports.postSignup = async (req, res, next) => {
    const userRepository = connection.getRepository(user_model_1.UserModel);
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    try {
        const user = await userRepository.findOne({ email: email });
        /*       if (user) {
            throw new WrongCredentials("User already exists", 400);
          } */
        /*       if (password !== confirmPassword) {
            throw new WrongCredentials("Passwords do not match", 400);
          } */
        //const hashedPassword = await bcrypt.hash(password, 12);
        /*     const createdUser = await User.create({
          email: email,
          password: hashedPassword,
          isAdmin: false,
        }); */
    }
    catch (err) {
        next(err);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2F1dGguY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHFEQUFpRDtBQUVqRCxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtJQUM1RSxNQUFNLGNBQWMsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDLHNCQUFTLENBQUMsQ0FBQztJQUUzRCxNQUFNLEtBQUssR0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNyQyxNQUFNLFFBQVEsR0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUUzQyxJQUFJO1FBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxjQUFjLENBQUMsT0FBTyxDQUFDO1lBQ3hDLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUMxQztRQUNELDZIQUE2SDtRQUM3SCxnRUFBZ0U7UUFDaEU7O1lBRUk7UUFDSixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFO0tBQ2Y7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNYO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsT0FBTyxDQUFDLFVBQVUsR0FBRyxLQUFLLEVBQ3hCLEdBQVksRUFDWixHQUFhLEVBQ2IsSUFBa0IsRUFDbEIsRUFBRTtJQUNGLE1BQU0sY0FBYyxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsc0JBQVMsQ0FBQyxDQUFDO0lBRTNELE1BQU0sS0FBSyxHQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3JDLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ25DLE1BQU0sZUFBZSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2pELElBQUk7UUFDRixNQUFNLElBQUksR0FBRyxNQUFNLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUU1RDs7Y0FFTTtRQUNOOztjQUVNO1FBRU4seURBQXlEO1FBQ3pEOzs7O2NBSU07S0FDUDtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ1g7QUFDSCxDQUFDLENBQUMifQ==