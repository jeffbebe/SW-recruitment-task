"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_model_1 = require("../models/User.model");
exports.postLogin = async (req, res, next) => {
    const userRepository = global.dbConnection.getRepository(User_model_1.UserModel);
    const email = req.body.email;
    const password = req.body.password;
    try {
        const user = await userRepository.findOne({ email });
        if (!user) {
            throw new Error("There is no such user");
        }
    }
    catch (err) {
        next(err);
    }
};
exports.postSignup = async (req, res, next) => {
    const userRepository = global.dbConnection.getRepository(User_model_1.UserModel);
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    try {
        const user = await userRepository.findOne({ email });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2F1dGguY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHFEQUFpRDtBQUVqRCxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtJQUM1RSxNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxzQkFBUyxDQUFDLENBQUM7SUFFcEUsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDN0IsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFFbkMsSUFBSTtRQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUMxQztLQUNGO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDWDtBQUNILENBQUMsQ0FBQztBQUVGLE9BQU8sQ0FBQyxVQUFVLEdBQUcsS0FBSyxFQUN4QixHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCLEVBQ2xCLEVBQUU7SUFDRixNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxzQkFBUyxDQUFDLENBQUM7SUFFcEUsTUFBTSxLQUFLLEdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDckMsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbkMsTUFBTSxlQUFlLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDakQsSUFBSTtRQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFckQ7O2NBRU07UUFDTjs7Y0FFTTtRQUVOLHlEQUF5RDtRQUN6RDs7OztjQUlNO0tBQ1A7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNYO0FBQ0gsQ0FBQyxDQUFDIn0=