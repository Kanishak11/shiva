const products = [
    {
      id: 1,
      name: 'Synron',
      href: '#',
      imageSrc: 'https://5.imimg.com/data5/GLADMIN/Default/2021/8/PJ/BC/ED/31268338/synron-avaleha-500x500.jpg',
      imageAlt: ".",
      price: '₹350',
    },
    {
        id: 2,
        name: 'Synron',
        href: '#',
        imageSrc: 'https://5.imimg.com/data5/GLADMIN/Default/2021/8/PJ/BC/ED/31268338/synron-avaleha-500x500.jpg',
        imageAlt: ".",
        price: '₹350',
      },
      {
        id: 3,
        name: 'Synron',
        href: '#',
        imageSrc: 'https://5.imimg.com/data5/GLADMIN/Default/2021/8/PJ/BC/ED/31268338/synron-avaleha-500x500.jpg',
        imageAlt: ".",
        price: '₹350',
      },
      {
        id: 4,
        name: 'Synron',
        href: '#',
        imageSrc: 'https://5.imimg.com/data5/GLADMIN/Default/2021/8/PJ/BC/ED/31268338/synron-avaleha-500x500.jpg',
        imageAlt: ".",
        price: '₹350',
      },
      {
        id: 5,
        name: 'Synron',
        href: '#',
        imageSrc: 'https://5.imimg.com/data5/GLADMIN/Default/2021/8/PJ/BC/ED/31268338/synron-avaleha-500x500.jpg',
        imageAlt: ".",
        price: '₹350',
      },
      {
        id: 6,
        name: 'Synron',
        href: '#',
        imageSrc: 'https://5.imimg.com/data5/GLADMIN/Default/2021/8/PJ/BC/ED/31268338/synron-avaleha-500x500.jpg',
        imageAlt: ".",
        price: '₹350',
      },
      {
        id: 7,
        name: 'Synron',
        href: '#',
        imageSrc: 'https://5.imimg.com/data5/GLADMIN/Default/2021/8/PJ/BC/ED/31268338/synron-avaleha-500x500.jpg',
        imageAlt: ".",
        price: '₹350',
      },
      {
        id: 8,
        name: 'Synron',
        href: '#',
        imageSrc: 'https://5.imimg.com/data5/GLADMIN/Default/2021/8/PJ/BC/ED/31268338/synron-avaleha-500x500.jpg',
        imageAlt: ".",
        price: '₹350',
      },
    // More products...
  ]
  
  export default function Products() {
    return (
      <div id="product" className="bg-gray-200">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="flex margin-auto justify-center text-4xl font-extrabold tracking-tight text-gray-900">Our Products</h2>
  
          <div className="mt-4 mb-4 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }