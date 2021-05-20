function Filter({ filterMode, handleFilter }) {
  const handleClick = (keyFilterMode, event) => {
    event.preventDefault();
    if (keyFilterMode !== filterMode) handleFilter(keyFilterMode);
  };

  return (
    <div className="panel-tabs">
      <button
        onClick={handleClick.bind(null, 'ALL')}
        className={filterMode === 'ALL' ? 'is-active' : null}
      >
        全て
      </button>
      <button
        onClick={handleClick.bind(null, 'TODO')}
        className={filterMode === 'TODO' ? 'is-active' : null}
      >
        未完了
      </button>
      <button
        onClick={handleClick.bind(null, 'DONE')}
        className={filterMode === 'DONE' ? 'is-active' : null}
      >
        完了済み
      </button>
    </div>
  );
}
export default Filter;