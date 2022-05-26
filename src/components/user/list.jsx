import Link from 'next/link'
function List({ listuser }) {
  return (
    <section class="body-font text-gray-600">
      <div class="container mx-auto px-5 py-24">
        <div class="mb-20 flex w-full flex-col text-center">
          <h1 class="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
            Our Team
          </h1>
          <p class="mx-auto text-base leading-relaxed lg:w-2/3">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p>
        </div>
        <div class="-m-2 flex flex-wrap">
          {listuser.map((listUser) => (
            <Link href={'/detailuser/' + listUser.id} key={listUser}>
              <div class="w-full p-2 md:w-1/2 lg:w-1/3">
                <div class="flex h-full items-center rounded-lg border border-gray-200 p-4">
                  <div class="flex-grow">
                    <h2 class="title-font font-medium text-gray-900">
                      {listUser.name}
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default List
