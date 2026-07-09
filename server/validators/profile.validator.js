import { body } from "express-validator";

export const profileRules = [
  body("fullName")
    .trim()
    .notEmpty()
    .withMessage("Full name is required"),

  body("title")
    .trim()
    .notEmpty()
    .withMessage("Professional title is required"),

  body("tagline")
    .optional()
    .trim(),

  body("bio")
    .trim()
    .notEmpty()
    .withMessage("Bio is required"),

  body("availability")
    .optional()
    .isBoolean()
    .withMessage("Availability must be true or false"),

  body("location")
    .optional()
    .trim(),

  body("email")
    .optional()
    .isEmail()
    .withMessage("Please provide a valid email"),

  body("yearsOfExperience")
    .optional()
    .isInt({ min: 0 }),

  body("projectsCompleted")
    .optional()
    .isInt({ min: 0 }),

  body("technologiesKnown")
    .optional()
    .isInt({ min: 0 }),

  body("socialLinks.github")
    .optional({ checkFalsy: true })
    .isURL()
    .withMessage("Invalid GitHub URL"),

  body("socialLinks.linkedin")
    .optional({ checkFalsy: true })
    .isURL()
    .withMessage("Invalid LinkedIn URL"),

  body("socialLinks.leetcode")
    .optional({ checkFalsy: true })
    .isURL()
    .withMessage("Invalid LeetCode URL"),

  body("socialLinks.twitter")
    .optional({ checkFalsy: true })
    .isURL()
    .withMessage("Invalid Twitter/X URL"),

  body("socialLinks.portfolio")
    .optional({ checkFalsy: true })
    .isURL()
    .withMessage("Invalid Portfolio URL"),
];