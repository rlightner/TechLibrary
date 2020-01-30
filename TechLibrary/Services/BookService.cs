using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TechLibrary.Data;
using TechLibrary.Domain;
using TechLibrary.Models;

namespace TechLibrary.Services
{
    public interface IBookService
    {
        Task<List<Book>> GetBooksAsync();
        Task<Book> GetBookByIdAsync(int bookid);
    }

    public class BookService : IBookService
    {
        private readonly DataContext _dataContext;

        public BookService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<List<Book>> GetBooksAsync()
        {
            var queryable = _dataContext.Books.AsQueryable();

            return await queryable.ToListAsync();
        }

        public async Task<Book> GetBookByIdAsync(int bookid)
        {
            return await _dataContext.Books.SingleOrDefaultAsync(x => x.BookId == bookid);
        }

        //// We can include these or make them code them on their own?

        //public async Task<List<Book>> GetBooksAsync(int page = 1, int pageSize = 10)
        //{
        //    var queryable = _dataContext.Books.AsQueryable();

        //    return await queryable.Skip(page).Take(pageSize).ToListAsync();
        //}

        //public async Task<bool> CreatePostAsync(Book book)
        //{
        //    await _dataContext.Books.AddAsync(book);

        //    var created = await _dataContext.SaveChangesAsync();

        //    return created > 0;
        //}

        //public async Task<bool> UpdatePostAsync(Book updatedBook)
        //{
        //    _dataContext.Books.Update(updatedBook);

        //    var updated = await _dataContext.SaveChangesAsync();

        //    return updated > 0;
        //}
    }
}
