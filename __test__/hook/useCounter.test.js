describe('Prueba en el userCounter', () => {
    
    test('Debe retornar valores por defecto', () => {
        const {result} = renderHook( () => useCounter());
        const {counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('Generar un counter con valor 100', () => {
        const {result} = renderHook( () => useCounter(100));
        const {counter} = result.current;

        expect(counter).toBe(100);   
    });

    test('Debe de incrementar el contador', () => {
        const {result} = renderHook( () => useCounter(100));
        const {counter, increment} = result.current;

        act( () => {
            increment();
        });

        expect(result.current.counter).toBe(101);
    });

    test('Debe de incrementar el contador y mantener el incremento anterior', () => {
        const {result} = renderHook( () => useCounter(100));
        const {counter, increment} = result.current;

        act( () => {
            increment();
            increment(4);
        });

        expect(result.current.counter).toBe(105);
    });

    test('Debe disminuir el contador', () => {
        const {result} = renderHook( () => useCounter(100));
        const {counter, decrement} = result.current;

        act( () => {
            decrement();
        });

        expect(result.current.counter).toBe(99);
    });

    test('Debe disminuir el contador y mantener la disminucion anterior', () => {
        const {result} = renderHook( () => useCounter(100));
        const {counter, decrement} = result.current;

        act( () => {
            decrement();
            decrement(4);
        });

        expect(result.current.counter).toBe(95);
    });

    test('debe de realizar el reset', () => {  
        const { result } = renderHook( () => useCounter(100) );
        const { counter, decrement, reset } = result.current;

        act( () => {
            decrement();
            reset();
        });

        expect( result.current.counter ).toBe(100);
    });
});