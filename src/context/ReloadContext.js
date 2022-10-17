import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const ReloadContext = createContext();

export function ReloadProvider({ children }) {
  const [state, setState] = useState(true);

  function handleToggleState() {
    if (state) {
      return setState(false);
    }
    return setState(true);
  }

  const value = useMemo(() => ({
    state, setState, handleToggleState,
  }));

  return (
    <ReloadContext.Provider value={value}>
      {children}
    </ReloadContext.Provider>
  );
}

ReloadProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
