import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "../src/hooks/useTransactions";

Modal.setAppElement('#root');


export function App() {
  const [isNewTransactionModalOpen, SetIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    SetIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    SetIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
    <Dashboard/>
    <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
    />
    <GlobalStyle />
    </TransactionsProvider>
    );
  }