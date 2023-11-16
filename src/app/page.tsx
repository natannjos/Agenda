import React from "react";
import { calendarData } from "@/app/data/calendarData";
// Mock de dados de eventos, substitua pela sua importação real do JSON
const events = calendarData;

const Calendar = () => {
  // Assumindo que você está trabalhando com um mês específico
  const year = 2023; // Ano atual
  const month = 10; // Novembro (JavaScript conta meses a partir de 0)
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // Dia da semana do primeiro dia do mês
  const numberOfDaysInMonth = new Date(year, month + 1, 0).getDate(); // Total de dias no mês

  // Calcula o número total de células no calendário, incluindo células vazias
  const totalCells = 5 * 7; // 5 linhas de 7 dias
  let daysFilled = 0;
  const calendarCells: (number | null)[][] = [];

  for (let cell = 0; cell < totalCells; cell++) {
    const dayIndex = cell % 7;
    let day: number | null = null;

    if (cell >= firstDayOfMonth && daysFilled < numberOfDaysInMonth) {
      day = ++daysFilled;
    }

    if (dayIndex === 0) {
      // Começa uma nova semana
      calendarCells.push([]);
    }

    // Adiciona o dia na última semana do array
    calendarCells[calendarCells.length - 1].push(day);
  }
  // Função para encontrar eventos para um dia específico
  const getEventsForDay = (day: number | null) => {
    // Filtra os eventos pelo dia específico
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === year &&
        eventDate.getMonth() === month &&
        eventDate.getDate() === day
      );
    });
  };

  return (
    <div className="flex flex-col bg-white rounded-xl shadow-lg ">
      {calendarCells.map((week, weekIdx) => (
        <div
          key={weekIdx}
          className="grid grid-cols-1  md:grid-cols-4 lg:grid-cols-7"
        >
          {week.map((day, dayIdx) => {
            const dayEvents = getEventsForDay(day);
            if (day === null)
              return (
                <div
                  key={dayIdx}
                  className="hidden md:block md:border md:p-2 md:h-32"
                ></div>
              );
            return (
              <div key={dayIdx} className="border p-2 h-32">
                <div className="font-bold">{day}</div>
                <div className="flex flex-col">
                  {dayEvents.map((event) => (
                    <div
                      key={event.id}
                      className="bg-blue-100 rounded-lg p-2 mb-2"
                    >
                      <p className="font-bold">{event.title}</p>
                      <p className="text-xs">{event.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center my-8">Meu App de Agenda</h1>
      <Calendar />
    </div>
  );
}
