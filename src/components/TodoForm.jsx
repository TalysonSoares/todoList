import { useState, useEffect } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) {
      setFormSubmitted(true);
      return;
    }

    addTodo(value, category);
    setValue('');
    setCategory('');
  };

  useEffect(() => {
    if (formSubmitted && value && category) {
      setFormSubmitted(false);
    }
  }, [value, category, formSubmitted]);

  return (
    <div className="todo-form">
      <h2>Criar Tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Estudos">Estudos</option>
        </select>
        {formSubmitted && (
          <p style={{ color: 'red' }}>Por favor, preencha todos os campos.</p>
        )}
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
