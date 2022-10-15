import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("Testing the use conunter hook", () => {
  test("Should return the default values", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("The value shoul be 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

  test("Should increment the counter", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => {
      increment();
    });

    expect(result.current.counter).toBe(101);
  });

  test("Should decrement the counter", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      decrement();
    });

    expect(result.current.counter).toBe(99);
  });

  test("Should reset the counter", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement, reset } = result.current;

    act(() => {
      decrement();
      reset();
    });

    expect(result.current.counter).toBe(100);
  });
});
