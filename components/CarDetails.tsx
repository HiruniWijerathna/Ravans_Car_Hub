import Image from 'next/image';
import { Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';

import { CarProps } from '@types';
import { generateCarImageUrl } from '@utils';

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex items-center justify-center min-h-full p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-md max-h-[90vh] overflow-y-auto transform rounded-lg dark:bg-gray-700 p-4 text-left shadow-lg transition-all flex flex-col gap-4 text-sm sm:text-xs">
                  {/* Close button */}
                  <button
                    type="button"
                    className="absolute z-10 p-1 rounded-full top-2 right-2 w-fit bg-primary-blue-100 hover:bg-primary-blue-200"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                  </button>

                  {/* Images */}
                  <div className="flex flex-col flex-1 gap-2">
                    <div className="relative w-full h-40 rounded-md bg-pattern ">
                      <Image
                        src={generateCarImageUrl(car)}
                        alt="car model"
                        fill
                        priority
                        className="object-contain "
                      />
                    </div>

                    <div className="flex gap-2">
                      <div className="relative flex-1 w-full h-20 rounded-md bg-primary-blue-100 dark:bg-gray-500">
                        <Image
                          src={generateCarImageUrl(car, "29")}
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="relative flex-1 w-full h-20 rounded-md bg-primary-blue-100 dark:bg-gray-500">
                        <Image
                          src={generateCarImageUrl(car, "33")}
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="relative flex-1 w-full h-20 rounded-md bg-primary-blue-100 dark:bg-gray-500">
                        <Image
                          src={generateCarImageUrl(car, "13")}
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Car details */}
                  <div>
                    <h2 className="mb-3 text-base font-semibold text-center text-gray-200 text-primary">
                      {car.make} {car.model}
                    </h2>
                    <div className="grid grid-cols-1 text-gray-300 gap-y-2">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between pb-1 border-b"
                          key={key}
                        >
                          <span className="text-gray-500 capitalize text-xs sm:text-[10px]">
                            {key.split("_").join(" ")}
                          </span>
                          <span className="font-medium text-gray-200 text-xs sm:text-[10px]">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
