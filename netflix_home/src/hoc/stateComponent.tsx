import React from 'react';

// Higher-Order Component that manages loading and error states
interface WithLoadingProps {
    status: string;
    error?: string | null;
}

const withLoading = <P extends object>(
    WrappedComponent: React.ComponentType<P>
): React.FC<P & WithLoadingProps> => ({ status, error, ...props }) => {
    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'failed') {
        return <p>Error: {error}</p>;
    }

    return <WrappedComponent {...(props as P)} />;
};

export default withLoading;
