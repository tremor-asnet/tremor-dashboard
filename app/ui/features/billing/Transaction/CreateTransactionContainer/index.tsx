"use client";

import { useState } from "react";
import { Button, Dialog, DialogPanel } from "@tremor/react";

// Icons
import { IoAddCircle } from "react-icons/io5";

// Components
import TransactionForm from "../TransactionForm";

const CreateTransactionContainer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  // TODO: Update later
  const handleSubmit = () => console.log("Submit");

  return (
    <>
      <Button
        className="bg-transparent hover:bg-transparent border-none p-0 dark:bg-transparent dark:hover:bg-transparent"
        style={{
          boxShadow: "none",
        }}
        onClick={handleOpen}>
        <IoAddCircle className="text-primary w-5 h-4 dark:text-white" />
      </Button>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogPanel className="py-5 px-4 rounded-md border-none outline-none flex flex-col gap-5 sm:min-w-[80%] md:min-w-[500px] bg-tremor-primary dark:bg-dark-tremor-primary">
          <h2 className="capitalize font-bold text-2xl text-center text-tertiary dark:text-dark-romance">
            Create new transaction
          </h2>
          <TransactionForm onSubmit={handleSubmit} onClose={handleClose} />
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default CreateTransactionContainer;
