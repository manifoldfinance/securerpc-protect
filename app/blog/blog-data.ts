export interface BlogPost {
  slug: string
  date: string
  title: string
  author: string
  tags: string[]
  excerpt: string
  content: string
}

const blogPosts: BlogPost[] = [
  {
    slug: "introducing-securerpc-privacy-features",
    date: "January 3, 2025",
    title: "Introducing SecureRPC Privacy Features",
    author: "SecureRPC Team",
    tags: ["privacy", "feature", "security"],
    excerpt: "Learn about our new suite of privacy-enhancing features for Ethereum transactions.",
    content: `
      We're excited to announce the launch of our comprehensive privacy features suite, designed to protect your transactions and maintain anonymity on the Ethereum network.

      ## Key Features

      ### 1. MEV Protection

      Our MEV protection system ensures that your transactions are safe from front-running and sandwich attacks. By utilizing a private transaction pool and sophisticated routing algorithms, we minimize the risk of value extraction.

      ### 2. Private Transaction Pool

      Transactions submitted through SecureRPC are held in a private pool before being broadcast to the network. This prevents others from viewing and potentially exploiting your pending transactions.

      ### 3. Flashbots Integration

      We've integrated directly with Flashbots to provide additional protection and optimal transaction ordering. This helps ensure your transactions are included in blocks efficiently and safely.

      ### 4. Transaction Privacy

      Our infrastructure includes several privacy-enhancing features:

      - Transaction obfuscation
      - Distributed submission
      - Timing randomization
      - Network privacy

      ## Getting Started

      To start using these privacy features, simply include the appropriate headers in your RPC requests:

      \`\`\`javascript
      const web3 = new Web3('https://api.securerpc.com/v1');
      web3.setRequestHeader('X-Privacy-Level', 'maximum');

      // Your transaction will now use all privacy features
      const tx = await web3.eth.sendTransaction({...});
      \`\`\`
    `,
  },
  {
    slug: "securerpc-performance-boost",
    date: "December 15, 2024",
    title: "SecureRPC Performance Boost: 50% Faster Responses",
    author: "Jane Doe",
    tags: ["performance", "update", "infrastructure"],
    excerpt:
      "We've significantly improved our infrastructure, resulting in 50% faster API responses. Learn about the changes and how they benefit you.",
    content: `
      We're thrilled to announce a major performance upgrade to SecureRPC. Our team has been working tirelessly to optimize our infrastructure, and the results are in: API responses are now 50% faster on average.

      ## What We Did

      1. **Upgraded Hardware**: We've invested in state-of-the-art servers to handle requests more efficiently.
      2. **Optimized Codebase**: Our engineers refactored critical parts of our codebase for better performance.
      3. **Improved Caching**: We implemented a more sophisticated caching system to reduce redundant computations.
      4. **Load Balancing**: Enhanced our load balancing algorithms to distribute traffic more evenly.

      ## How This Benefits You

      - **Faster Transactions**: Your Ethereum transactions will be processed and broadcast to the network more quickly.
      - **Improved User Experience**: If you're building dApps, your users will enjoy snappier response times.
      - **Reduced Costs**: Faster processing times can lead to lower gas costs in some scenarios.
      - **Higher Throughput**: We can now handle more requests per second, reducing the chance of bottlenecks during high-traffic periods.

      ## Benchmarks

      Here are some before-and-after benchmarks for common RPC methods:

      | Method | Old Response Time | New Response Time | Improvement |
      |--------|-------------------|-------------------|-------------|
      | eth_getBalance | 120ms | 60ms | 50% |
      | eth_call | 200ms | 95ms | 52.5% |
      | eth_getTransactionReceipt | 150ms | 70ms | 53.3% |

      We're committed to continually improving SecureRPC to provide you with the best possible experience. Stay tuned for more updates!
    `,
  },
]

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
