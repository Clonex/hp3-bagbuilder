import { FunctionComponent } from "react";
import classNames from "classnames";
import { useGetOwnedItemsQuery } from "../hooks";

export const Sidebar: FunctionComponent = () => {
  const { data } = useGetOwnedItemsQuery();
  const items = data?.ownedItems ?? [];

  return (
    <div>
      <div className="fixed inset-y-0 z-50 flex w-72 flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className={classNames(
                        item.id
                          ? "bg-gray-50 text-indigo-600"
                          : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                        "group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      )}
                    >
                      <img
                        alt={item.nameNo}
                        src={`https://hundeparken.net/h5/game/gfx/item/${item.gfxList.at(
                          0
                        )}.png`}
                      />
                      {item.nameNo}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
          Dashboard
        </div>
        <a href="#">
          <span className="sr-only">Your profile</span>
          <img
            className="h-8 w-8 rounded-full bg-gray-50"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </a>
      </div>

      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">{/* Your content */} Hejsa</div>
      </main>
    </div>
  );
};
