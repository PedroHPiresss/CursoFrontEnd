"use-client";

import { useEffect, useState } from "react";
import { IUsuario } from "@/models/usuario";
import { IEquipamento } from "@/models/equipamento";
import { IOrdemServico } from "@/models/ordemServico";

import styles from "./DashboardAdmin.module.css";

export default function DashboardAdmin() {
  const [usuarios, setUsuarios] = useState<IUsuario[]>([]);
  const [equipamentos, setEquipamentos] = useState<IEquipamento[]>([]);
  const [ordens, setOrdens] = useState<IOrdemServico[]>([]);

  useEffect(() => {
    fetchUsuarios();
    fetchEquipamentos();
    fetchOrdens();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const res = await fetch("/api/usuarios");
      const data = await res.json();
      if (data.success) {
        setUsuarios(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchEquipamentos = async () => {
    try {
      const res = await fetch("/api/equipamentos");
      const data = await res.json();
      if (data.success) {
        setEquipamentos(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchOrdens = async () => {
    try {
      const res = await fetch("/api/ordemservicos");
      const data = await res.json();
      if (data.success) {
        setOrdens(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Admin Dashboard</h3>

      <section className={styles.section}>
        <h4>Usuários</h4>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario._id}>
                <td>{usuario.username}</td>
                <td>{usuario.tipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className={styles.section}>
        <h4>Equipamentos</h4>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Modelo</th>
              <th>Marca</th>
              <th>Localização</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {equipamentos.map((equip) => (
              <tr key={equip._id}>
                <td>{equip.modelo}</td>
                <td>{equip.marca}</td>
                <td>{equip.localizacao}</td>
                <td>{equip.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className={styles.section}>
        <h4>Ordens de Serviço</h4>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Título</th>
              <th>Descrição</th>
              <th>Status</th>
              <th>Tipo de Manutenção</th>
              <th>Data Solicitação</th>
              <th>Data Finalização</th>
              <th>Técnico ID</th>
              <th>Equipamento ID</th>
            </tr>
          </thead>
          <tbody>
            {ordens.map((ordem) => (
              <tr key={ordem._id}>
                <td>{ordem.titulo}</td>
                <td>{ordem.descricao}</td>
                <td>{ordem.status}</td>
                <td>{ordem.tipoManutencao}</td>
                <td>{new Date(ordem.dataSolicitada).toLocaleDateString()}</td>
                <td>{ordem.dataFinalizada ? new Date(ordem.dataFinalizada).toLocaleDateString() : ""}</td>
                <td>{ordem.tecnicoId}</td>
                <td>{ordem.equipamentoId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
