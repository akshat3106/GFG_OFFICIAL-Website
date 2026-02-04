export interface Problem {
    id: number;
    title: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    description: string;
    examples: { input: string; output: string }[];
    constraints: string[];
    starterCode: {
        cpp: string;
        java: string;
        python: string;
        javascript: string;
    };
    testCases: { input: string; expectedOutput: string }[];
}

const titles = [
    "Two Sum", "Reverse Linked List", "Binary Tree Level Order Traversal", "Merge Intervals",
    "Maximum Subarray", "Valid Parentheses", "Product of Array Except Self", "Climbing Stairs",
    "Longest Palindromic Substring", "Number of Islands", "Container With Most Water", "Rotate Image"
];

const difficulties = ['Easy', 'Medium', 'Hard'] as const;

export const generateProblems = (): Problem[] => {
    const problems: Problem[] = [];

    for (let i = 1; i <= 365; i++) {
        const title = titles[i % titles.length] + (i > titles.length ? ` ${Math.ceil(i / titles.length)}` : "");
        const difficulty = difficulties[i % 3];

        problems.push({
            id: i,
            title: title,
            difficulty: difficulty,
            description: `Given a set of inputs, solve for ${title}. This is a ${difficulty} problem designed to test your algorithmic thinking. Ensure your solution is optimized for time complexity.`,
            examples: [
                { input: "n = 5", output: "5" },
                { input: "n = 10", output: "55" }
            ],
            constraints: ["1 <= n <= 10^5", "Time Limit: 1s"],
            starterCode: {
                cpp: `// ${title}\nclass Solution {\npublic:\n    void solve() {\n        // Your code here\n    }\n};`,
                java: `// ${title}\nclass Solution {\n    public void solve() {\n        // Your code here\n    }\n}`,
                python: `# ${title}\nclass Solution:\n    def solve(self):\n        # Your code here\n        pass`,
                javascript: `// ${title}\n/**\n * @param {number} n\n * @return {number}\n */\nvar solve = function(n) {\n    // Your code here\n};`
            },
            testCases: [
                { input: "5", expectedOutput: "5" },
                { input: "10", expectedOutput: "55" },
                { input: "0", expectedOutput: "0" }
            ]
        });
    }
    return problems;
};

export const problems = generateProblems();
