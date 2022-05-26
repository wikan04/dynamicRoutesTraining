function Detail({ detailData }) {
  return (
    <div class="-m-2 flex flex-wrap">
      <div class="w-full p-2 md:w-1/2 lg:w-1/3">
        <div class="flex h-full items-center rounded-lg border border-gray-200 p-4">
          <div class="flex-grow">
            <h2 class="title-font font-medium text-gray-900">
              {detailData.name}
            </h2>
            <p class="text-gray-500">{detailData.username}</p>
            <p class="text-gray-500">{detailData.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
