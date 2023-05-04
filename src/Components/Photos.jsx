import { useState } from 'react'

import { PlusIcon as PlusIconOutline } from '@heroicons/react/24/outline'

const products = [
  {
    id: 1,
    name: 'Black Basic Tee',
    price: '$32',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
    imageAlt: "Model wearing women's black cotton crewneck tee.",
  },

]
export default function Photos() {

  return (
    <>
      <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Tus archivos</h2>
              <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Agrega un archivo &nbsp;
                  <PlusIconOutline className="h-5 w-5" aria-hidden="true" />
                </button>
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="h-96 w-full overflow-hidden rounded-lg group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-3 sm:h-auto">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    <a href={product.href}>
                      <span className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:hidden">
              <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                Browse all favorites
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>

      </main>
      <aside className="relative hidden w-96 flex-shrink-0 overflow-hidden border-l border-gray-200 xl:flex xl:flex-col">
        <aside
          className="
          hidden
          w-96
          bg-white
          p-8
          border-l border-gray-200
          overflow-y-auto
          lg:block
        "
        >
          <div class="pb-16 space-y-6">
            <div>
              <div
                class="
                block
                w-full
                aspect-w-10 aspect-h-7
                rounded-lg
                overflow-hidden
              "
              >
                <img alt="" class="object-cover" />
              </div>
              <div class="mt-4 flex items-start justify-between">
                <div>
                  <h2 class="text-lg font-medium text-gray-900">
                    <span class="sr-only">Detalles para </span
                    >
                  </h2>
                  <p class="text-sm font-medium text-gray-500">

                  </p>
                </div>

              </div>
            </div>


            <div>
              <h3 class="font-medium text-gray-900">Información</h3>
              <dl
                class="
                mt-2
                border-t border-b border-gray-200
                divide-y divide-gray-200
              "
              >
                <div class="py-3 flex justify-between text-sm font-medium"
                >
                  <dt class="text-gray-500"> </dt>
                  <dd class="text-gray-900">

                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 class="font-medium text-gray-900">Compartido con</h3>
              <ul
                role="list"
                class="
                mt-2
                border-t border-b border-gray-200
                divide-y divide-gray-200
              "
              >
                <li class="py-3 flex justify-between items-center">
                  <div class="flex items-center">
                    <img
                      alt=""
                      class="w-8 h-8 rounded-full"
                    />
                    <p class="ml-4 text-sm font-medium text-gray-900">

                    </p>
                  </div>
                  <button

                    type="button"
                    class="
                    ml-6
                    bg-white
                    rounded-md
                    text-sm
                    font-medium
                    text-blue-600
                    hover:text-blue-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-blue-500
                  "
                  >
                    Descarga<span class="sr-only"> </span>
                  </button>
                </li>
                <li class="py-2 flex justify-between items-center">
                  <button
                    type="button"
                    class="
                    group
                    -ml-1
                    bg-white
                    p-1
                    rounded-md
                    flex
                    items-center
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                  "
                  >
                    <span
                      class="
                      w-8
                      h-8
                      rounded-full
                      border-2 border-dashed border-gray-300
                      flex
                      items-center
                      justify-center
                      text-gray-400
                    "
                    >
                      < PlusIconOutline class="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span
                      class="
                      ml-4
                      text-sm
                      font-medium
                      text-blue-600
                      group-hover:text-blue-500
                    "
                    >Comparte</span
                    >
                  </button>
                </li>
              </ul>
            </div>


            <div>
              <h3 class="font-medium text-gray-900">Archivo filtrado?</h3>
              <ul
                role="list"
                class="
                mt-2
                border-t border-b border-gray-200
                divide-y divide-gray-200
              "
              >
                <li class="py-2 justify-between items-center">
                  <div class="sm:col-span-6">
                    <div
                      class="
                      mt-1
                      flex
                      justify-center
                      px-6
                      pt-5
                      pb-6
                      border-2 border-gray-300 border-dashed
                      rounded-md
                      w-full
                    "
                    >
                      <div class="space-y-1 text-center">
                        <svg
                          class="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <div class="flex text-sm text-gray-600">
                          <label
                            for="file-upload"
                            class="
                            relative
                            cursor-pointer
                            bg-white
                            rounded-md
                            font-medium
                            text-blue-600
                            hover:text-blue-500
                            focus-within:outline-none
                            focus-within:ring-2
                            focus-within:ring-offset-2
                            focus-within:ring-blue-500
                          "
                          >
                            <span>Sube el archivo filtrado</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              class="sr-only"
                            />
                          </label>
                          <p class="pl-1">o arrástralo</p>
                        </div>

                        <p class="text-xs text-gray-500">
                          PNG, JPG, GIF hasta de 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="pt-4 pb-1">
                    <div class="flex justify-end">
                      <button
                        type="submit"
                        class="
                        ml-3
                        inline-flex
                        justify-center
                        py-2
                        px-4
                        border border-transparent
                        shadow-sm
                        text-sm
                        font-medium
                        rounded-md
                        text-white
                        bg-blue-600
                        hover:bg-blue-700
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-blue-500
                      "
                      >
                        Identificar
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="flex">
              <button

                type="button"
                class="
                flex-1
                ml-3
                bg-white
                py-2
                px-4
                border border-gray-300
                rounded-md
                shadow-sm
                text-sm
                font-medium
                text-gray-700
                hover:bg-gray-50
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-blue-500
              "
              >
                Borrar
              </button>
            </div>
          </div>
        </aside>
      </aside>
    </>
  );
}