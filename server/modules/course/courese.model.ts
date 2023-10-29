import { Schema, model } from "mongoose";
import { CourseModel, TCourse } from "./course.interface";

const CourseSchema = new Schema<TCourse, Record<string, unknown>>({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  estimatedPrice: {
    type: Number,
  },

  thumbnail: {
    publicId: {
      type: String,
    },
    url: {
      type: String,
    },
  },

  tags: [
    {
      type: String,
      required: true,
    },
  ],

  level: {
    type: String,
    required: true,
  },

  demoUrl: {
    type: String,
    required: true,
  },

  benefits: [
    {
      title: String,
    },
  ],

  prerequisites: [
    {
      title: String,
    },
  ],

  reviews: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
      rating: {
        type: Number,
      },
      comment: {
        type: String,
      },
      commentReplies: [
        {
          user: {
            type: Schema.Types.ObjectId,
            ref: "user",
          },
          comment: {
            type: String,
          },
        },
      ],
    },
  ],

  courseData: [
    {
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      videoUrl: {
        type: String,
      },
      videoThumbnail: {
        type: Object,
      },
      videoSection: {
        type: String,
      },
      videoLength: {
        type: Number,
      },
      videoPlayer: {
        type: String,
      },

      suggestion: {
        type: String,
      },
      links: [
        {
          title: {
            type: String,
          },
          url: {
            type: String,
          },
        },
      ],
      questions: [
        {
          user: {
            type: Schema.Types.ObjectId,
            ref: "user",
          },
          question: {
            type: String,
          },
          questionsReplies: [
            {
              user: {
                type: Schema.Types.ObjectId,
                ref: "user",
              },
              answer: {
                type: String,
              },
            },
          ],
        },
      ],
    },
  ],

  ratings: {
    type: Number,
    default: 0,
  },

  purchased: {
    type: Number,
    default: 0,
  },
});

export const Course = model<TCourse, CourseModel>("Course", CourseSchema);
