const posts = [
    {
      id: 1,
      title: 'Strengthening Our Cyber Defenses',
      href: '#',
      description:
        'Discover how our latest investment in advanced cybersecurity measures has transformed our digital infrastructure, enhancing data protection and threat response capabilities.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'CTO', href: '#' },
      author: {
        name: 'Niranjan Kunwar',
        role: 'CTO',
        href: '#',
        imageUrl:
          'https://i.postimg.cc/Df4v0rT2/CTO.jpg' },
    },
    // More posts...
    {
        id: 2,
        title: 'Protecting Your Data, Prioritizing Your Trust',
        href: '#',
        description:'We’ve launched enhanced cybersecurity protocols to ensure your personal information is always safe with us. From encrypted systems to vigilant monitoring, our commitment to your digital security means you can rely on Kanxi with complete confidence.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Operation', href: '#' },
        author: {
          name: 'Sampanna Shrestha',
          role: 'Information Security Consultant',
          href: '#',
          imageUrl:
            'https://i.postimg.cc/zXmJgyzT/Sampanna.jpg' },
      },
      
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl 	background-image: ;">Join Us!</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
             Take this opportunity to lead a hassle
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  