export default function Leaks() {

    return (
        <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
            <div className="bg-white">
                <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <h1 class="flex-1 text-2xl font-bold text-gray-900">Leaks</h1>
                    <h2 className="text-lg mt-7 leading-6 font-medium text-gray-900">Resumen</h2>
                    <div class="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white overflow-hidden shadow rounded-lg" >
                            <div class="p-5">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                        <component
                                            class="h-6 w-6 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div class="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt class="text-sm font-medium text-gray-500 truncate">

                                            </dt>
                                            <dd>
                                                <div class="text-lg font-medium text-gray-900">

                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
