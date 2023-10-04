import { describe, expect, test } from "vitest";
import MoviesList, { getMovies } from "../app/movies/page";
import { render, screen } from "@testing-library/react";

describe('Movies List', async () => {

  test('getMovies works', async () => {
    const result = await getMovies()
    expect(result).toHaveLength(2)
    // console.log(result) //Uncomment this to see the output
  })

  test('displays list of movies', async () => {
    const component = await MoviesList()
    const page = render(component)
    expect(page).toBeTruthy()


    const sopranoElem = screen.getByText(/sopranos/i)
    expect(sopranoElem).toBeDefined()
    expect(sopranoElem.innerHTML).toEqual("The Sopranos (2007)")
  })
})