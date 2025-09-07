export const commentData = {
  postId: "12345",
  comments: [
    {
      commentId: "c1",
      user: {
        userId: "u101",
        username: "john_doe",
        avatarUrl: "https://example.com/avatars/john.jpg",
      },
      content: "This is the first comment on the post!",
      timestamp: "2025-09-05T09:30:00Z",
      likes: 5,
      replies: [
        {
          commentId: "c1_1",
          user: {
            userId: "u102",
            username: "jane_smith",
            avatarUrl: "https://example.com/avatars/jane.jpg",
          },
          content: "I totally agree with you!",
          timestamp: "2025-09-05T10:00:00Z",
          likes: 2,
          replies: [
            {
              commentId: "c1_1_1",
              user: {
                userId: "u103",
                username: "alex_90",
                avatarUrl: "https://example.com/avatars/alex.jpg",
              },
              content: "Same here!",
              timestamp: "2025-09-05T10:15:00Z",
              likes: 1,
              replies: [
                {
                  commentId: "c1_1_1_1",
                  user: {
                    userId: "u106",
                    username: "sofia_lee",
                    avatarUrl: "https://example.com/avatars/sofia.jpg",
                  },
                  content: "Great to see consensus!",
                  timestamp: "2025-09-05T10:18:00Z",
                  likes: 1,
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          commentId: "c1_2",
          user: {
            userId: "u104",
            username: "mike_rock",
            avatarUrl: "https://example.com/avatars/mike.jpg",
          },
          content: "Not sure I agree though.",
          timestamp: "2025-09-05T10:20:00Z",
          likes: 0,
          replies: [
            {
              commentId: "c1_2_1",
              user: {
                userId: "u101",
                username: "john_doe",
                avatarUrl: "https://example.com/avatars/john.jpg",
              },
              content: "Can you explain why?",
              timestamp: "2025-09-05T10:21:00Z",
              likes: 1,
              replies: [],
            },
          ],
        },
      ],
    },
    {
      commentId: "c2",
      user: {
        userId: "u105",
        username: "emma_star",
        avatarUrl: "https://example.com/avatars/emma.jpg",
      },
      content: "Here’s another comment, no replies yet.",
      timestamp: "2025-09-05T11:00:00Z",
      likes: 3,
      replies: [],
    },
    {
      commentId: "c3",
      user: {
        userId: "u107",
        username: "liam_black",
        avatarUrl: "https://example.com/avatars/liam.jpg",
      },
      content: "Does anyone have additional insights?",
      timestamp: "2025-09-05T12:00:00Z",
      likes: 0,
      replies: [
        {
          commentId: "c3_1",
          user: {
            userId: "u108",
            username: "rita_kim",
            avatarUrl: "https://example.com/avatars/rita.jpg",
          },
          content: "Check out last year’s discussion!",
          timestamp: "2025-09-05T12:10:00Z",
          likes: 2,
          replies: [],
        },
        {
          commentId: "c3_2",
          user: {
            userId: "u109",
            username: "tommy_chen",
            avatarUrl: "https://example.com/avatars/tommy.jpg",
          },
          content: "I think it’s all about perspective.",
          timestamp: "2025-09-05T12:12:00Z",
          likes: 1,
          replies: [
            {
              commentId: "c3_2_1",
              user: {
                userId: "u110",
                username: "lucas_ray",
                avatarUrl: "https://example.com/avatars/lucas.jpg",
              },
              content: "Well said, Tommy.",
              timestamp: "2025-09-05T12:13:00Z",
              likes: 1,
              replies: [],
            },
          ],
        },
      ],
    },
    {
      commentId: "c4",
      user: {
        userId: "u111",
        username: "nina_val",
        avatarUrl: "https://example.com/avatars/nina.jpg",
      },
      content: "Thanks for sharing, learned a lot!",
      timestamp: "2025-09-05T12:45:00Z",
      likes: 4,
      replies: [
        {
          commentId: "c4_1",
          user: {
            userId: "u105",
            username: "emma_star",
            avatarUrl: "https://example.com/avatars/emma.jpg",
          },
          content: "Glad it helped!",
          timestamp: "2025-09-05T12:47:00Z",
          likes: 2,
          replies: [],
        },
      ],
    },
  ],
};
